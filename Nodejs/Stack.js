class Stack
{
    constructor()
    {
        this.container = [] ;
    }

    push(data)
    {
        this.container.push(data);
    }

    pop()
    {
        return this.container.pop();
    }

    peek()
    {
        return this.container.at(-1); 
    }
}

module.exports = Stack;