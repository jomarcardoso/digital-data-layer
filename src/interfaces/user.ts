import { Profile, Address } from "./primitive";

interface UserProfile extends Profile {
  address: Address
  social?: {
    facebook?: string,
    facebookInfo?: string,
  },
  attributes: Object;
}

export interface User {
  segment?: Object;
  profile: Array<UserProfile>
}
