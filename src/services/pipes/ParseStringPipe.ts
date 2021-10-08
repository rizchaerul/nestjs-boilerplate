import { HttpStatus, Injectable, Optional, PipeTransform } from "@nestjs/common";
import { ErrorHttpStatusCode, HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";

export interface ParseStringPipeOptions {
    errorHttpStatusCode?: ErrorHttpStatusCode;
    exceptionFactory?: (error: string) => any;
}

@Injectable()
export class ParseStringPipe implements PipeTransform<string, Promise<string>> {
    protected exceptionFactory: (error: string) => any;

    constructor(@Optional() options?: ParseStringPipeOptions) {
        options = options || {};

        const { exceptionFactory, errorHttpStatusCode = HttpStatus.BAD_REQUEST } = options;

        this.exceptionFactory =
            exceptionFactory ||
            (error => new HttpErrorByCode[errorHttpStatusCode](error));
    }

    /**
     * Method that accesses and performs optional transformation on argument for
     * in-flight requests.
     *
     * @param value currently processed route argument
     * @param metadata contains metadata about the currently processed route argument
     */
    async transform(value: string/*, metadata: ArgumentMetadata*/): Promise<string> {
        if (typeof value === "string") {
            return value;
        }

        throw this.exceptionFactory("Validation failed (string is expected)");
    }
}
