import { Injectable, Optional } from "@nestjs/common";
import { ParseStringPipe, ParseStringPipeOptions } from "../ParseStringPipe";

@Injectable()
export class ParseStringOptionalPipe extends ParseStringPipe {
    constructor(@Optional() options?: ParseStringPipeOptions) {
        super(options);
    }

    async transform(value: string/*, metadata: ArgumentMetadata*/): Promise<any> {
        if (value === null || typeof value === "undefined") {
            return null;
        }

        return await super.transform(value);
    }
}
