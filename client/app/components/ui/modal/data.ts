export type Transaction = {
    id: string;
    creationDate: string;
    entityId: string;
    entityName: string;
    entityType: string;
    transactionDate: string;
    amount: number;
    status: string;
    earningType: string;
    category: string;
    notes: string;
  };
  
  type Response = { data: { transactions: Transaction[] } };
  
  export const mockResponse: Response = {
    data: {
      transactions: [
        {
          id: "07f46f9a-95b6-471c-aa58-cc95158e4a8b",
          creationDate: "2022-04-18T20:30:52.995636426Z",
          entityId: "e177b8d4-c024-4ea8-b707-a8774ed2b1dd",
          entityType: "FACULTY",
          entityName: "Ginny Granger",
          transactionDate: "2022-04-27T20:30:41.000Z",
          amount: 45,
          status: "SUBMITTED",
          earningType: "0X_MCAT_TUT_CORE",
          category: "MCAT Core Tutor",
          notes: ""
        },
        {
          id: "14b655a7-d0ce-4dc7-9bee-4b2b2d1b44d2",
          creationDate: "2022-04-18T20:27:40.17506308Z",
          entityId: "e177b8d4-c024-4ea8-b707-a8774ed2b1dd",
          entityType: "FACULTY",
          entityName: "David Bowie",
          transactionDate: "2022-04-25T20:26:57.000Z",
          amount: 45,
          status: "SUBMITTED",
          earningType: "0X_MCAT_TUT_CORE",
          category: "MCAT Core Tutor",
          notes:
            "I don't know where I'm going from here, but I promise it won't be boring."
        },
        {
          id: "cd3e5071-60b5-4ee3-9a98-a2fd5e60f215",
          creationDate: "2022-04-18T20:30:06.002432771Z",
          entityId: "e177b8d4-c024-4ea8-b707-a8774ed2b1dd",
          entityType: "FACULTY",
          entityName: "Ned Weasley",
          transactionDate: "2022-04-26T20:26:57.000Z",
          amount: 60,
          status: "SUBMITTED",
          earningType: "0X_MCAT_TUT_CORE",
          category: "MCAT Core Tutor",
          notes: "He's a hero all right, a hero sandwich full of bologna!"
        },
  
        {
          id: "ca089d7e-18b6-4a0f-b959-dff624f63652",
          creationDate: "2022-04-18T20:32:51.73165375Z",
          entityId: "e177b8d4-c024-4ea8-b707-a8774ed2b1dd",
          entityType: "FACULTY",
          entityName: "Sam Potter",
          transactionDate: "2022-04-28T20:30:41.000Z",
          amount: 165,
          status: "SUBMITTED",
          earningType: "0X_MCAT_TUT_CORE",
          category: "MCAT Core Tutor",
          notes:
            "Even though it's just one word, “always” is largely considered one of the most iconic lines."
        }
      ]
    }
  };
  