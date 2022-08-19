# insert-sql

help developer generator a insert SQL statement

- npmjs: [https://www.npmjs.com/package/insert-sql](https://www.npmjs.com/package/insert-sql)
- github: [https://github.com/mouday/insert-sql](https://github.com/mouday/insert-sql)

## install

```bash
npm i insert-sql
```

## example

```js
import { getInsertSql } from "insert-sql";

getInsertSql("tb_user", ["id", "name", "age"])
// "INSERT INTO `tb_user` (`id`, `name`, `age`) VALUES (:id, :name, :age)"

getInsertSql("tb_user", ["id", "name", "age"], '?')
// "INSERT INTO `tb_user` (`id`, `name`, `age`) VALUES (?, ?, ?)"
```

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

## test

```bash
# use test
$ npm run test
```