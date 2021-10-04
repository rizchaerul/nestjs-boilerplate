import { HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";

@Injectable()
export class ParseStringPipe implements PipeTransform<any, string> {
    transform(value: any): string {
        if (typeof value === "string") {
            return value;
        }

        throw new HttpErrorByCode[HttpStatus.BAD_REQUEST]("Validation failed (string is expected)");
    }
}
