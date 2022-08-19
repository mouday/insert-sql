# insert-sql

help developer generator a insert SQL statement

## define
```js
/**
 * get insert sql
 * @param {String} table
 * @param {Array} fields
 * @param {String} placeholder
 * @returns
 */
function getInsertSql(table, fields, placeholder = null)
```

## example

```js
import { getInsertSql } from "insert-sql";

getInsertSql("tb_user", ["id", "name", "age"])
// "INSERT INTO `tb_user` (`id`, `name`, `age`) VALUES (:id, :name, :age)"

getInsertSql("tb_user", ["id", "name", "age"], '?')
// "INSERT INTO `tb_user` (`id`, `name`, `age`) VALUES (?, ?, ?)"
```

```bash
# use test
$ npm run test
```