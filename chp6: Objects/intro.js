/*
    1. A property has a name and a value
    2. The name can be either a string or a Symbol
    3. values can be any JS value (even getter and setter functions)
    4. properties are defined directly on an object (own properties)
    5. some properties are inherited from a prototype  
    6. in addition to a name and value each PROPERTY has three PROPERTY attributes
        1. Writable attribute: specifies whether a value of the property can be set
        2. Enumerable attribute: specifies whether the PROPERTY NAME is returned by a for/in loop
        3. Configurable attribute: whether a property can be deleted and whether its attributes (WRITABLE, ENUMERABLE) can be altered
 */