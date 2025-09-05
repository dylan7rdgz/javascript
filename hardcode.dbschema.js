/* Problem Statement - A: To ask for an excel sheet from a client where processing it is easy for me */
/* Problem Statement - B: Break up the tables in such a way so that processing (joins, group by queries) is easy to compute */

/* Example - Hotel Management System */

/* Solution */

/*
Hotel Management System Schema


Hotel Schema and Table

Hotel
id [Primary Key], name [String],        Address[String]            Phone[String]   Email  Website  Rating [Small Integer]
1                       Radison         ..., Pune, Maharashtra      ...            ...    ...      ...
2                       Ramada          ..., Pune, Maharashtra      
3                       Ramada          ..., Lonavala, Mahrashtra              
4                       Ramada          ..., Lonavala, Maharashtra   

solution to problem statement B:
Not creating a separate table for place. Instead, it is better to store the entire address as a string in the same table.

Rooms
RoomID [Primary Key] RoomNumber RoomType  Floor  Rate Status [ENUM]   HotelID (Foreign Key referencing Hotel table)
1                               single    1       5    available        1
2                               single    2       2    available        1
3                               double    1       1    occupied         1
                                suite     1       3    available        1
                                single    1       5    available        2

solution to problem statement B:
Room table is necessary since there is necessary information to store. In this case it is better to noramalize the table
because if we do not the table will be too large and it will be difficult to seek a record. Joins also are a bit expensive,
with indexes the search time can be improved.


Guests
GuestID [Primary Key] FirstName LastName Email Phone Address
1                     Dylan
2                     Pratik
3                     Deepak

solution to problem B
same for  Guests, Resrvations and Payments. This should be normailized as the information in the table is important
else a single table will be extremely large

Reservations
**NOTE**
This table will help us identify which customer/guest booked which room

ReservationID (Primary Key) GuestID (Foreign Key referencing Guests table) RoomID (Foreign Key referencing Rooms table) CheckInDate CheckOutDate TotalAmount Status (e.g., confirmed, cancelled)
1                           1                                               1
2                           1                                               2
3                           2                                               2    


PaymentID (Primary Key) ReservationID (Foreign Key referencing Reservations table) Amount PaymentDate  PaymentMethod 
1                          1                                                        500     21-06-204   card
2                          2                                                        600                 cash                    
3                                                                                                       bank transfer



Solution to problem A
We can either ask the client to give us 5 excel/csv for separate tables and we can just dump them independenlty
OR
we can ask for a cartesian product of all the information in one excel/csv (Exactly, the same as what sheet you showed me during the interview)
For example,

        
id [Primary Key], name [String],        Address[String]            Phone[String]   Email  Website  Rating [Small Integer]
1                       Radison         ..., Pune, Maharashtra      ...            ...    ...      ...                          All the rooms
                                                                                                                                    .
                                                                                                                                    .
                                                                                                                                    .
2                       Ramada          ..., Pune, Maharashtra      
3                       Ramada          ..., Lonavala, Mahrashtra              
4                       Ramada          ..., Lonavala, Maharashtra   

Until we scan the next hotel i.e Ramada we will keep adding the Rooms infomation as it is in rooms table and the foriegn key will be set to the id of Radison

I hope this answers your question If you want to understand more details, we can discuss it =)

Cheers,
Dylan
*/

