import { ArgumentMetadata, Injectable, Optional, ParseArrayOptions, ParseArrayPipe } from "@nestjs/common";

@Injectable()
export class ParseArrayOptionalPipe extends ParseArrayPipe {
    constructor(@Optional() options?: ParseArrayOptions) {
        super(options);
    }

    async transform(value: string, metadata: ArgumentMetadata): Promise<any> {
        if (value === null || typeof value === "undefined") {
            return null;
        }

        return await super.transform(value, metadata);
    }
}
