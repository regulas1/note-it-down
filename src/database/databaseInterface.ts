interface Database {
	insertInTable(tableName: string, rowData: object): void
	getByIdFromTable(tableName: string, id: number): object
	getWhereFromTable(tableName: string, where: object): object
	getAllFromTable(tableName: string): object
	updateInTableWhere(tableName: string, where: object, updateTo: object): void	
	deleteWhere(tableName: string, where: object): void
}