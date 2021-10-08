import { ArgumentMetadata, Injectable, Optional, ParseIntPipe, ParseIntPipeOptions } from "@nestjs/common";

@Injectable()
export class ParseIntOptionalPipe extends ParseIntPipe {
    constructor(@Optional() options?: ParseIntPipeOptions) {
        super(options);
    }

    async transform(value: string, metadata: ArgumentMetadata): Promise<any> {
        if (value === null || typeof value === "undefined") {
            return null;
        }

        return await super.transform(value, metadata);
    }
}
