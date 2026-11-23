// Backwards-compatible imports for existing 4G LTE pages and API.
// Update prepaid and postpaid source tables in their dedicated files.
export {
  PREPAID_CONNECTION_CHARGES,
  MAIN_PACKAGES,
  DATA_ADDONS,
  RELOAD_VALIDITY_MATRIX
} from './fourGPrepaid';

export {
  NEW_HBB_ANYTIME_PACKAGES,
  VOLUME_BASED_PACKAGES,
  LEGACY_ANYTIME_PACKAGES,
  UNLIMITED_RESIDENTIAL_PACKAGES,
  UNLIMITED_SME_PACKAGES,
  UNLIMITED_VOICE_PACKAGES,
  STANDARD_VOICE_PACKAGES_MATRIX
} from './fourGPostpaid';
