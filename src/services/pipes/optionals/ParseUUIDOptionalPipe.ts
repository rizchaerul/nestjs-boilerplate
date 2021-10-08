import { ArgumentMetadata, Injectable, Optional, ParseUUIDPipe, ParseUUIDPipeOptions } from "@nestjs/common";

@Injectable()
export class ParseUUIDOptionalPipe extends ParseUUIDPipe {
    constructor(@Optional() options?: ParseUUIDPipeOptions) {
        super(options);
    }

    async transform(value: string, metadata: ArgumentMetadata): Promise<any> {
        if (value === null || typeof value === "undefined") {
            return null;
        }

        return await super.transform(value, metadata);
    }
}
