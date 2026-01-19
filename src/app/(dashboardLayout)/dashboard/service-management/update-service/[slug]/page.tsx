

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Trash2, Plus, Upload, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/features/service/service.api";
import { IService } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import UpdateServiceSkeleton from "@/components/modules/dashboard/service/UpdateServiceSkeleton";

const updateServiceSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").optional(),
  serviceSummary: z.string().max(300).optional(),
  shortDescription: z.string().max(300).optional(),
  serviceIcon: z.string().optional(),

  banner: z
    .object({
      title: z.string().min(1).optional(),
      subtitle: z.string().min(1).optional(),
    })
    .optional(),

  overView: z
    .object({
      title: z.string().min(1).optional(),
      description: z.string().min(10).optional(),
      features: z.array(z.string()).optional(),
      serviceImage: z.instanceof(File).optional(),
    })
    .optional(),

  serviceMatter: z
    .object({
      matterSectionTitle: z.string().min(1).optional(),
      matterSectionSubTitle: z.string().min(1).optional(),
      withoutSaaS: z
        .object({
          badgeTitle: z.string().min(1).optional(),
          badgeIcon: z.string().min(1).optional(),
          title: z.string().min(1).optional(),
          items: z
            .array(z.object({ icon: z.string().min(1), text: z.string().min(1) }))
            .min(1)
            .optional(),
        })
        .optional(),
      withSaaS: z
        .object({
          badgeTitle: z.string().min(1).optional(),
          badgeIcon: z.string().min(1).optional(),
          title: z.string().min(1).optional(),
          items: z
            .array(z.object({ icon: z.string().min(1), text: z.string().min(1) }))
            .min(1)
            .optional(),
        })
        .optional(),
    })
    .optional(),

  features: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        icon: z.string().min(1),
      })
    )
    .optional(),

  processSteps: z
    .array(
      z.object({
        stepNumber: z.number().min(1),
        title: z.string().min(1),
        description: z.string().min(1),
        icon: z.string().min(1),
      })
    )
    .optional(),

  requirementDocs: z
    .array(
      z.object({
        title: z.string().min(1),
        icon: z.string().min(1),
      })
    )
    .optional(),

  faqs: z
    .array(
      z.object({
        question: z.string().min(1),
        answer: z.string().min(1),
      })
    )
    .optional(),
});

type UpdateServiceFormValues = z.infer<typeof updateServiceSchema>;

interface FileUploadProps {
  value?: File;
  onChange: (file: File | undefined) => void;
  accept?: string;
  label?: string;
}

function FileUpload({
  value,
  onChange,
  accept = "image/*",
  label = "Upload Image",
}: FileUploadProps) {
  const [preview, setPreview] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    onChange(undefined);
    setPreview("");
  };

  return (
    <div className="space-y-2">
      {preview ? (
        <div className="relative w-full h-40 border rounded-lg overflow-hidden group">
          <Image src={preview} alt="Preview" fill className="object-cover" />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">{label}</span>
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, WEBP (MAX. 5MB)</p>
          </div>
          <input type="file" className="hidden" accept={accept} onChange={handleFileChange} />
        </label>
      )}
      {value && (
        <p className="text-xs text-gray-500">
          Selected: {value.name} ({(value.size / 1024).toFixed(2)} KB)
        </p>
      )}
    </div>
  );
}

export default function UpdateServiceForm() {
  const params = useParams();
  const serviceSlug = params.slug as string; // assuming slug is used for fetching
  const { data: serviceResponse, isLoading, error } = useGetSingleServiceQuery(serviceSlug, {
    skip: !serviceSlug,
  });

  const service = serviceResponse?.data as IService | undefined;
  const [updateService, { isLoading: isUpdating }] = useUpdateServiceMutation();
  const router = useRouter();

  const form = useForm<UpdateServiceFormValues>({
    resolver: zodResolver(updateServiceSchema),
    defaultValues: {
      title: "",
      serviceSummary: "",
      shortDescription: "",
      serviceIcon: "",
      banner: { title: "", subtitle: "" },
      overView: { title: "", description: "", features: [""], serviceImage: undefined },
      serviceMatter: {
        matterSectionTitle: "",
        matterSectionSubTitle: "",
        withoutSaaS: {
          badgeTitle: "",
          badgeIcon: "",
          title: "",
          items: [{ icon: "", text: "" }],
        },
        withSaaS: {
          badgeTitle: "",
          badgeIcon: "",
          title: "",
          items: [{ icon: "", text: "" }],
        },
      },
      features: [{ title: "", description: "", icon: "" }],
      processSteps: [{ stepNumber: 1, title: "", description: "", icon: "" }],
      requirementDocs: [{ title: "", icon: "" }],
      faqs: [{ question: "", answer: "" }],
    },
  });

  // Load existing service data into form
  useEffect(() => {
    if (service) {
      form.reset({
        title: service.title || "",
        serviceSummary: service.serviceSummary || "",
        shortDescription: service.shortDescription || "",
        serviceIcon: service.serviceIcon || "",
        banner: {
          title: service.banner?.title || "",
          subtitle: service.banner?.subtitle || "",
        },
        overView: {
          title: service.overView?.title || "",
          description: service.overView?.description || "",
          features: service.overView?.features?.length ? service.overView.features : [""],
          serviceImage: undefined,
        },
        serviceMatter: {
          matterSectionTitle: service.serviceMatter?.matterSectionTitle || "",
          matterSectionSubTitle: service.serviceMatter?.matterSectionSubTitle || "",
          withoutSaaS: {
            badgeTitle: service.serviceMatter?.withoutSaaS?.badgeTitle || "",
            badgeIcon: service.serviceMatter?.withoutSaaS?.badgeIcon || "",
            title: service.serviceMatter?.withoutSaaS?.title || "",
            items: service.serviceMatter?.withoutSaaS?.items?.length
              ? service.serviceMatter.withoutSaaS.items
              : [{ icon: "", text: "" }],
          },
          withSaaS: {
            badgeTitle: service.serviceMatter?.withSaaS?.badgeTitle || "",
            badgeIcon: service.serviceMatter?.withSaaS?.badgeIcon || "",
            title: service.serviceMatter?.withSaaS?.title || "",
            items: service.serviceMatter?.withSaaS?.items?.length
              ? service.serviceMatter.withSaaS.items
              : [{ icon: "", text: "" }],
          },
        },
        features: service.features?.length
          ? service.features.map((f) => ({
            title: f.title || "",
            description: f.description || "",
            icon: f.icon || "",
          }))
          : [{ title: "", description: "", icon: "" }],
        processSteps: service.processSteps?.length
          ? service.processSteps.map((step) => ({
            stepNumber: step.stepNumber || 1,
            title: step.title || "",
            description: step.description || "",
            icon: step.icon || "",
          }))
          : [{ stepNumber: 1, title: "", description: "", icon: "" }],
        requirementDocs: service.requirementDocs?.length
          ? service.requirementDocs.map((doc) => ({
            title: doc.title || "",
            icon: doc.icon || "",
          }))
          : [{ title: "", icon: "" }],
        faqs: service.faqs?.length
          ? service.faqs
          : [{ question: "", answer: "" }],
      });
    }
  }, [service, form]);

  // Field arrays
  const { fields: overviewFeatures, append: appendOverviewFeature, remove: removeOverviewFeature } =
    useFieldArray({ control: form.control, name: "overView.features" as const } as any);

  const { fields: withoutSaaSItems, append: appendWithoutItem, remove: removeWithoutItem } =
    useFieldArray({ control: form.control, name: "serviceMatter.withoutSaaS.items" });

  const { fields: withSaaSItems, append: appendWithItem, remove: removeWithItem } =
    useFieldArray({ control: form.control, name: "serviceMatter.withSaaS.items" });

  const { fields: features, append: appendFeature, remove: removeFeature } =
    useFieldArray({ control: form.control, name: "features" });

  const { fields: processSteps, append: appendProcessStep, remove: removeProcessStep } =
    useFieldArray({ control: form.control, name: "processSteps" });

  const { fields: requirementDocs, append: appendRequirementDoc, remove: removeRequirementDoc } =
    useFieldArray({ control: form.control, name: "requirementDocs" });

  const { fields: faqs, append: appendFaq, remove: removeFaq } =
    useFieldArray({ control: form.control, name: "faqs" });

  const onSubmit = async (data: UpdateServiceFormValues) => {
    try {
      const formData = new FormData();
      const payload: any = {};

      // Basic fields
      if (data.title) payload.title = data.title;
      if (data.serviceSummary !== undefined) payload.serviceSummary = data.serviceSummary;
      if (data.shortDescription !== undefined) payload.shortDescription = data.shortDescription;
      if (data.serviceIcon !== undefined) payload.serviceIcon = data.serviceIcon;

      // Banner
      if (data.banner) {
        payload.banner = {};
        if (data.banner.title) payload.banner.title = data.banner.title;
        if (data.banner.subtitle) payload.banner.subtitle = data.banner.subtitle;
      }

      // Overview
      if (data.overView) {
        payload.overView = {};
        if (data.overView.title) payload.overView.title = data.overView.title;
        if (data.overView.description) payload.overView.description = data.overView.description;
        if (data.overView.features) payload.overView.features = data.overView.features;
      }

      // Service Matter
      if (data.serviceMatter) {
        payload.serviceMatter = {
          matterSectionTitle:
            data.serviceMatter.matterSectionTitle ||
            service?.serviceMatter?.matterSectionTitle ||
            "",
          matterSectionSubTitle:
            data.serviceMatter.matterSectionSubTitle ||
            service?.serviceMatter?.matterSectionSubTitle ||
            "",
          withoutSaaS: {
            badgeTitle:
              data.serviceMatter.withoutSaaS?.badgeTitle ||
              service?.serviceMatter?.withoutSaaS?.badgeTitle ||
              "",
            badgeIcon:
              data.serviceMatter.withoutSaaS?.badgeIcon ||
              service?.serviceMatter?.withoutSaaS?.badgeIcon ||
              "",
            title:
              data.serviceMatter.withoutSaaS?.title ||
              service?.serviceMatter?.withoutSaaS?.title ||
              "",
            items: data.serviceMatter.withoutSaaS?.items || [],
          },
          withSaaS: {
            badgeTitle:
              data.serviceMatter.withSaaS?.badgeTitle ||
              service?.serviceMatter?.withSaaS?.badgeTitle ||
              "",
            badgeIcon:
              data.serviceMatter.withSaaS?.badgeIcon ||
              service?.serviceMatter?.withSaaS?.badgeIcon ||
              "",
            title:
              data.serviceMatter.withSaaS?.title ||
              service?.serviceMatter?.withSaaS?.title ||
              "",
            items: data.serviceMatter.withSaaS?.items || [],
          },
        };
      }

      if (data.features) payload.features = data.features;
      if (data.processSteps) payload.processSteps = data.processSteps;
      if (data.requirementDocs) payload.requirementDocs = data.requirementDocs;
      if (data.faqs) payload.faqs = data.faqs;

      formData.append("data", JSON.stringify(payload));

      // File uploads (only if new file selected)
      if (data.overView?.serviceImage) {
        formData.append("serviceImage", data.overView.serviceImage);
      }

      const res = await updateService({
        id: service?._id as string,
        formData,
      }).unwrap();

      if (res.success) {
        await Promise.all([
          fetch("/api/revalidate/services", { method: "POST" }),
          service?.slug
            ? fetch(`/api/revalidate/service/${service.slug}`, { method: "POST" })
            : Promise.resolve(),
        ]);

        toast.success("Service updated successfully!");
        router.push("/dashboard/service-management");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update service");
    }
  };

  if (isLoading) return <UpdateServiceSkeleton />;
  if (error || !service) return <div className="text-center p-10 text-red-600 text-xl">Service not found</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#002047]">Update Service</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Title</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceSummary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Summary</FormLabel>
                    <FormControl>
                      <Textarea rows={3} {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea rows={3} {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceIcon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Icon</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Banner Section */}
          <Card>
            <CardHeader>
              <CardTitle>Banner Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="banner.title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banner Title</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="banner.subtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banner Subtitle</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Overview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Overview Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="overView.title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Overview Title</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="overView.description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Overview Description</FormLabel>
                    <FormControl>
                      <Textarea rows={5} {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="overView.serviceImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Image (New)</FormLabel>
                    <FormControl>
                      <FileUpload
                        value={field.value}
                        onChange={field.onChange}
                        label="Upload new image (optional)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <FormLabel>Overview Features (optional)</FormLabel>
                <div className="space-y-3 mt-3">
                  {overviewFeatures.map((item, index) => (
                    <div key={item.id} className="flex gap-3 items-center">
                      <FormField
                        control={form.control}
                        name={`overView.features.${index}`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input {...field} value={field.value ?? ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeOverviewFeature(index)}
                        disabled={overviewFeatures.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-3"
                  onClick={() => appendOverviewFeature("")}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Feature
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Service Matter Section */}
          <Card>
            <CardHeader>
              <CardTitle>Service Matter Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="serviceMatter.matterSectionTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Section Title</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceMatter.matterSectionSubTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Section Subtitle</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-6" />

              {/* Without SaaS */}
              <div className="space-y-5 p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">Without SaaS</h3>
                <FormField
                  control={form.control}
                  name="serviceMatter.withoutSaaS.badgeTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Badge Title</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceMatter.withoutSaaS.badgeIcon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Badge Icon</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceMatter.withoutSaaS.title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <FormLabel>Items</FormLabel>
                  {withoutSaaSItems.map((item, index) => (
                    <div key={item.id} className="flex gap-3 mt-3 items-center">
                      <FormField
                        control={form.control}
                        name={`serviceMatter.withoutSaaS.items.${index}.icon`}
                        render={({ field }) => (
                          <FormItem className="w-32">
                            <FormControl>
                              <Input {...field} value={field.value ?? ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`serviceMatter.withoutSaaS.items.${index}.text`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input {...field} value={field.value ?? ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeWithoutItem(index)}
                        disabled={withoutSaaSItems.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    onClick={() => appendWithoutItem({ icon: "", text: "" })}
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Item
                  </Button>
                </div>
              </div>

              <Separator className="my-6" />

              {/* With SaaS */}
              <div className="space-y-5 p-4 border rounded-lg">
                <h3 className="text-lg font-semibold ">With SaaS</h3>
                <FormField
                  control={form.control}
                  name="serviceMatter.withSaaS.badgeTitle"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Badge Title</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceMatter.withSaaS.badgeIcon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Badge Icon</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceMatter.withSaaS.title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <FormLabel>Items</FormLabel>
                  {withSaaSItems.map((item, index) => (
                    <div key={item.id} className="flex gap-3 mt-3 items-center">
                      <FormField
                        control={form.control}
                        name={`serviceMatter.withSaaS.items.${index}.icon`}
                        render={({ field }) => (
                          <FormItem className="w-32">
                            <FormControl>
                              <Input {...field} value={field.value ?? ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`serviceMatter.withSaaS.items.${index}.text`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input {...field} value={field.value ?? ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeWithItem(index)}
                        disabled={withSaaSItems.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    onClick={() => appendWithItem({ icon: "", text: "" })}
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Item
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {features.map((item, index) => (
                <div key={item.id} className="p-5 border rounded-lg relative">
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-3 right-3"
                    onClick={() => removeFeature(index)}
                    disabled={features.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <FormField
                    control={form.control}
                    name={`features.${index}.title`}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`features.${index}.description`}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea rows={3} {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`features.${index}.icon`}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Icon</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendFeature({ title: "", description: "", icon: "" })}
              >
                <Plus className="h-4 w-4 mr-2" /> Add Feature
              </Button>
            </CardContent>
          </Card>

          {/* Process Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Process Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {processSteps.map((item, index) => (
                <div key={item.id} className="p-5 border rounded-lg relative">
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-3 right-3"
                    onClick={() => removeProcessStep(index)}
                    disabled={processSteps.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <FormField
                    control={form.control}
                    name={`processSteps.${index}.stepNumber`}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Step Number</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            value={field.value ?? 1}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`processSteps.${index}.title`}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`processSteps.${index}.description`}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea rows={3} {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`processSteps.${index}.icon`}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Icon</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  appendProcessStep({
                    stepNumber: processSteps.length + 1,
                    title: "",
                    description: "",
                    icon: "",
                  })
                }
              >
                <Plus className="h-4 w-4 mr-2" /> Add Step
              </Button>
            </CardContent>
          </Card>

          {/* Requirement Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Requirement Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {requirementDocs.map((item, index) => (
                <div key={item.id} className="flex gap-4 items-end">
                  <FormField
                    control={form.control}
                    name={`requirementDocs.${index}.title`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`requirementDocs.${index}.icon`}
                    render={({ field }) => (
                      <FormItem className="w-40">
                        <FormLabel>Icon</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeRequirementDoc(index)}
                    disabled={requirementDocs.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendRequirementDoc({ title: "", icon: "" })}
              >
                <Plus className="h-4 w-4 mr-2" /> Add Document
              </Button>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card>
            <CardHeader>
              <CardTitle>FAQs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {faqs.map((item, index) => (
                <div key={item.id} className="p-5 border rounded-lg relative">
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-3 right-3"
                    onClick={() => removeFaq(index)}
                    disabled={faqs.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <FormField
                    control={form.control}
                    name={`faqs.${index}.question`}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Question</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`faqs.${index}.answer`}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Answer</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendFaq({ question: "", answer: "" })}
              >
                <Plus className="h-4 w-4 mr-2" /> Add FAQ
              </Button>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-end gap-4 pt-6">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset to Original
            </Button>
            <Button type="submit" disabled={isUpdating} className="px-8">
              {isUpdating ? (
                <span className="flex items-center gap-2">
                  <Spinner />
                  Updating...
                </span>
              ) : (
                "Update Service"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}


