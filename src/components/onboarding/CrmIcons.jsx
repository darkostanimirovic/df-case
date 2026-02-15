import { LuCircleHelp } from 'react-icons/lu'
import { SiHubspot, SiSalesforce, SiZoho } from 'react-icons/si'

function PipedriveLogo() {
  return (
    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M14 6.188c0 3.675-2.357 6.189-5.727 6.189-1.603 0-2.923-.664-3.417-1.494l.023.853V17h-3.44V3.39c0-.19-.047-.238-.26-.238H0V.26h2.876c1.32 0 1.65 1.138 1.744 1.637C5.138 1.018 6.505 0 8.437 0 11.761-.001 14 2.488 14 6.188zm-3.512.023c0-1.968-1.272-3.319-2.876-3.319-1.319 0-2.804.877-2.804 3.344 0 1.612.895 3.296 2.758 3.296 1.367-.001 2.922-.997 2.922-3.32z" fill="#008678" />
    </svg>
  )
}

function DynamicsLogo() {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M0 18L4.427 7.936 0 5.636V18zm14-6.225V6.061L0 18l14-6.225zM0 0v4.823l9.136 3.55 4.246-2.737L0 0z" fill="#081956" />
    </svg>
  )
}

export function BeforeCrmIcon({ crm }) {
  if (crm === 'Pipedrive') return <PipedriveLogo />
  if (crm === 'Dynamics 365') return <DynamicsLogo />
  if (crm === 'Zoho') return <SiZoho className="h-5 w-5 text-[#e42527]" />
  if (crm === 'HubSpot') return <SiHubspot className="h-5 w-5 text-[#ff7a59]" />
  if (crm === 'Salesforce') return <SiSalesforce className="h-5 w-5 text-[#00a1e0]" />
  if (crm === 'Other') return <LuCircleHelp className="h-5 w-5 text-platform-neutral-500" />
  return null
}
