import { Profile, Address } from './primitive';

interface UserProfile extends Profile {
  address: Address;
  social?: {
    facebook?: string;
    facebookInfo?: string;
  };
  attributes: Record<string, unknown>;
}

export interface User {
  segment?: Record<string, unknown>;
  profile: Array<UserProfile>;
}
