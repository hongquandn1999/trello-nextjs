import { OrganizationSwitcher, auth } from '@clerk/nextjs';

export default function OrganizationIdPage() {
  const { user, orgId } = auth();
  return <div>{/* <OrganizationSwitcher hidePersonal /> */}</div>;
}
