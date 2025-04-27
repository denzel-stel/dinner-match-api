import { sha256 } from "@oslojs/crypto/sha2";
import HashServiceInterface from "./interfaces/HashServiceInterface";
import { encodeHexLowerCase } from "@oslojs/encoding";
class OsloHashService implements HashServiceInterface {
    hash(string: string): string {
        return encodeHexLowerCase(sha256(new TextEncoder().encode(string)));
    }
    
}

export default new OsloHashService();