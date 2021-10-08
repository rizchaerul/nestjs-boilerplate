import { ArgumentMetadata, Injectable, Optional, ParseFloatPipe, ParseFloatPipeOptions } from "@nestjs/common";

@Injectable()
export class ParseFloatOptionalPipe extends ParseFloatPipe {
    constructor(@Optional() options?: ParseFloatPipeOptions) {
        super(options);
    }

    async transform(value: string, metadata: ArgumentMetadata): Promise<any> {
        if (value === null || typeof value === "undefined") {
            return null;
        }

        return await super.transform(value, metadata);
    }
}
