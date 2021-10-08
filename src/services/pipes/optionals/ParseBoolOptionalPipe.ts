import { ArgumentMetadata, Injectable, Optional, ParseBoolPipe, ParseBoolPipeOptions } from "@nestjs/common";

@Injectable()
export class ParseBoolOptionalPipe extends ParseBoolPipe {
    constructor(@Optional() options?: ParseBoolPipeOptions) {
        super(options);
    }

    async transform(value: string, metadata: ArgumentMetadata): Promise<any> {
        if (value === null || typeof value === "undefined") {
            return null;
        }

        return await super.transform(value, metadata);
    }
}
