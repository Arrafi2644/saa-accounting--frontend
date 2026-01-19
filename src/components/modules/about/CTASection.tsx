'use client';
import CommonCTA2 from '../shared/cta/CommonCTA2';

const commonCTAProps = {
  title: "Ready to Work with Our Expert Team?",
  subTitle: "Lets discuss how we can help your business thrive with our comprehensive accounting and advisory services.",
  primaryBtnText: "Book Consultant",
  secondaryBtnText: "Join as a Client"
}


export default function CTASection() {
  return (
    <CommonCTA2 title={commonCTAProps.title} subTitle={commonCTAProps.subTitle} primaryBtnText={commonCTAProps.primaryBtnText} secondaryBtnText={commonCTAProps.secondaryBtnText} />
  );
}