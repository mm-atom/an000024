import { read, utils } from 'xlsx';

/**
 * excel转json
 */
export default function excel2json<T>(data: Buffer) {
	const wb = read(data, {
		type: 'buffer'
	});
	return wb.SheetNames.map((sheet_name) => {
		return utils.sheet_to_json<T>(wb.Sheets[sheet_name], {
			raw: true
		});
	});
}
