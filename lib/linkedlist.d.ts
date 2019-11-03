declare class LLNode {
    element: any;
    next: any;
    toString: any;
    constructor(element: any);
}
declare class LinkedList {
    head: any;
    size: any;
    constructor();
    add(element: any): void;
    insertAt(element: any, index: any): boolean;
    removeFrom(index: any): any;
    removeElement(element: any): any;
    indexOf(element: any): number;
    isEmpty(): boolean;
    readonly listSize: any;
}
