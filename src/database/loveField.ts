class LoveField implements Database {
   private readonly schemaBuilder = lf.schema.create("noteitdown", 1);
   private db: lf.Database | undefined;

   constructor() {
      // notes adds a foregin key on site schema.
      // check if we need to build site schema before notes
      this.buildSiteSchema();
      this.buildNotesSchema();
      this.connectToDatabase();
   }

   static async build() {
      const loveFieldClient = new LoveField();
      await loveFieldClient.connectToDatabase();
      return loveFieldClient;
   }

   async connectToDatabase() {
      if (!this.db) {
         this.db = await this.schemaBuilder.connect();
      }
   }

   private buildSiteSchema() {
      this.schemaBuilder
         .createTable("Sites")
         .addColumn("id", lf.Type.INTEGER)
         .addColumn("url", lf.Type.STRING)
         .addColumn("title", lf.Type.STRING)
         .addPrimaryKey(["id"]);
   }

   private buildNotesSchema() {
      // potentially add index for site name or title
      this.schemaBuilder
         .createTable("Notes")
         .addColumn("id", lf.Type.INTEGER)
         .addColumn("note", lf.Type.STRING)
         .addColumn("siteId", lf.Type.INTEGER)
         .addColumn("scroll", lf.Type.INTEGER)
         .addColumn("createdOn", lf.Type.DATE_TIME)
         .addPrimaryKey(["id"])
         .addForeignKey("fk_siteId", {
            local: "siteId",
            ref: "Site.id",
            action: lf.ConstraintAction.CASCADE,
         });
   }

	/**
	 * Inserts a new row into the specified table.
	 *  
	 * @param tableName 
	 * @param rowData 
	 * @returns 
	 */
   async insertInTable(tableName: string, rowData: object): Promise<void> {
      if (!this.db) {
			// throw error for db not connected. tell user to connect db
			return;
      }
      // throw exception if table does not exist
      const table = this.db.getSchema().table(tableName);
      const row = table.createRow(rowData);
      await this.db.insert().into(table).values([row]).exec();
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
   updateInTableWhere(
      tableName: string,
      where: object,
      updateTo: object
   ): void {
      throw new Error("Method not implemented.");
   }
   deleteWhere(tableName: string, where: object): void {
      throw new Error("Method not implemented.");
   }
}
