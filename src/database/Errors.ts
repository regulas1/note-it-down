class IdNotFoundError extends Error {
    constructor() {
        super("Object with the specified ID was not found.");
        this.name = "IdNotFound";
    }
}

class UndefinedTableName extends Error {
    constructor() {
        super("Undefined table name. Please select a name of the type TableNames");
        this.name = "UndefinedTableName";
    }
}