import { ArgumentMetadata, Injectable, Optional, ParseEnumPipe, ParseEnumPipeOptions } from "@nestjs/common";

@Injectable()
export class ParseEnumOptionalPipe<T> extends ParseEnumPipe<T | null> {
    constructor(enumType: T, @Optional() options?: ParseEnumPipeOptions) {
        super(enumType, options);
    }

    async transform(value: T, metadata: ArgumentMetadata): Promise<T | null> {
        if (value === null || typeof value === "undefined") {
            return null;
        }

        return await super.transform(value, metadata);
    }
}
