import { getInsertSql } from "insert-sql";

test("getInsertSql base use", () => {
  let result =
    "INSERT INTO `tb_user` (`id`, `name`, `age`) VALUES (:id, :name, :age)";
  expect(getInsertSql("tb_user", ["id", "name", "age"])).toBe(result);
});

test("getInsertSql use placeholder", () => {
  let result =
    "INSERT INTO `tb_user` (`id`, `name`, `age`) VALUES (?, ?, ?)";
  expect(getInsertSql("tb_user", ["id", "name", "age"], '?')).toBe(result);
});
