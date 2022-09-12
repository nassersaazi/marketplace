import { Organisation as TOrganisation } from "../api/organisation/Organisation";

export const ORGANISATION_TITLE_FIELD = "providerName";

export const OrganisationTitle = (record: TOrganisation): string => {
  return record.providerName || record.id;
};
