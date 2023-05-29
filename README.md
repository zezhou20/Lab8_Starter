# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed. 
Consider positioning automated tests within a Github action that triggers whenever code is pushed. Such a setup allows for automatic execution of tests post local testing and prior to the code deployment, thus ensuring issue detection each time the code is updated.


2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

End-to-end testing may not be the optimal choice for verifying if a function is producing the right outcomes. Instead, unit tests could be more suitable for this task because they allow for the provision of specific inputs and expected outputs to examine the functionality of your code.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I believe that unit tests might not be the most effective method for testing the message feature of a messaging application. This is due to the feature comprising several functions that could be challenging to examine through unit tests, given the extensive number of elements to consider.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Unit tests would be an appropriate choice for testing the maximum message length, as it is a rather straightforward feature that could be encapsulated within one function. By supplying the function with a range of inputs, we can thoroughly test the functionality of this feature using a unit test. Moreover, this approach allows us to establish the expected results beforehand.


