/**
 * @interface PresencePayload
 */
export interface PresencePayload {
    state?: string | undefined;
    details?: string | undefined;
    startTimestamp?: number | null | undefined;
    endTimestamp?: number | null | undefined;
    largeImageKey?: string | undefined;
    largeImageText?: string | undefined;
    smallImageKey?: string | undefined;
    smallImageText?: string | undefined;
    partyId?: string | undefined;
    partySize?: number | undefined;
    partyMax?: number | undefined;
    matchSecret?: string | undefined;
    spectateSecret?: string | undefined;
    joinSecret?: string | undefined;
    instance?: boolean | undefined;
}
