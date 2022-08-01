class ChromeStorage implements Database {
	insertInTable(tableName: string, rowData: object): void {
		throw new Error("Method not implemented.");
	}
	getByIdFromTable(tableName: string, id: number): object {
		throw new Error("Method not implemented.");
	}
	getWhereFromTable(tableName: string, where: object): object {
		throw new Error("Method not implemented.");
	}
	getAllFromTable(tableName: string): object {
		throw new Error("Method not implemented.");
	}
	updateInTableWhere(tableName: string, where: object, updateTo: object): void {
		throw new Error("Method not implemented.");
	}
	deleteWhere(tableName: string, where: object): void {
		throw new Error("Method not implemented.");
	}

}