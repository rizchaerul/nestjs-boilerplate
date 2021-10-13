import faker from "faker";
import { sample } from "lodash";
import { spawn } from "child_process";

// Automatically save seed script to clipboard.
// Windows only, tested on Windows 10.
// Use npm run db:seed.

const accountIds: string[] = [];
const numOfAccounts = 8;
const numOfCats = 20;

let clipBoard = "";

clipBoard += "INSERT INTO account\n";
clipBoard += "VALUES\n";

for (let index = 0; index < numOfAccounts; index++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const id = faker.datatype.uuid();

    // eslint-disable-next-line quotes
    const sql = `('${id}', '${firstName} ${lastName}', '${firstName.toLowerCase() + lastName.toLowerCase() + "@mail.com"}', '$2a$12$P9KJBHx.JyKC0x2Y2T.6duDtbzaDut7UvyI/RTRkSXGdu3NcC6aki')${index === numOfAccounts - 1 ? ";" : ","}`;

    accountIds.push(id);
    clipBoard += sql + "\n";
}

clipBoard += "\n";

clipBoard += "INSERT INTO cat(account_id, name)\n";
clipBoard += "VALUES\n";

for (let index = 0; index < numOfCats; index++) {
    const accountId = sample(accountIds);
    const name = faker.name.firstName();

    if (!accountId) {
        continue;
    }

    // eslint-disable-next-line quotes
    const sql = `('${accountId}', '${name}')${index === numOfCats - 1 ? ";" : ","}`;

    clipBoard += sql + "\n";
}

clipBoard += "\n";

// Insert into clipboard.
spawn("clip").stdin.end(clipBoard);
console.log("Success! check ctrl + v to paste.");
