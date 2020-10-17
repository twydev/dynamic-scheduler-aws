import { DynamoDB } from "aws-sdk";

export interface Scheduler {
    getMetadata(tableName: string): Promise<any>;
}

abstract class DynamoDBClient {
    protected client: DynamoDB;

    constructor(private readonly options?: DynamoDB.ClientConfiguration) {
        this.client = new DynamoDB(options)
    }

    showConfigs(): DynamoDB.ClientConfiguration {
        return this.client.config;
    }
}

export default class DynamicScheduler extends DynamoDBClient implements Scheduler {

    // TODO: unit test
    getMetadata(tableName: string): Promise<any> {
        const params = {
            TableName: tableName,
        }

        return this.client.describeTable(params).promise();
    }
} 