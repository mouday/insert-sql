/**
 * get insert sql
 * @param {String} table
 * @param {Array} fields
 * @param {String} placeholder
 * @returns
 */
export function getInsertSql(table, fields, placeholder = null) {
  let keys = fields.map((field) => `\`${field}\``).join(', ')
  let values = null
  if (placeholder) {
    values = fields.map((_) => placeholder).join(', ')
  } else {
    values = fields.map((field) => `:${field}`).join(', ')
  }

  return `INSERT INTO \`${table}\` (${keys}) VALUES (${values})`
}
