---
sidebar_label: send()
title: send Method
description: You can learn about the send method of the RestDataProvider in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# send()

### Description

@short: Sends a necessary HTTP request to the server and returns a promise with or without data depending on the request 

All requests to the server are made with the **send()** method which is a part of the [**RestDataProvider**](guides/working_with_server.md/#restdataprovider) service.

### Usage

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): Promise<obj[]>
~~~

### Parameters

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *Required*. A path to the server where a request is sent to.            |
| `method`            |string             | *Required*. An HTTP method type (Get, Post, Put, Delete)            |
| `data`  | object        | *Optional*. Parameters that are sent to the server. By default, parameters of the fired event are sent.  But you are free to add additional parameters with the custom object. See [Example 2](#examples) below. |
| `headers`  |object       | *Optional*. A default header is the **Content-Type** header set to *application/json*. More optional headers can be added with the **customHeaders** parameter. See [Example 1](#examples) below. |

### Response

The method returns the promise object with or without data depending on the request.

A promise is returned back to the success request status. In case of the failed request (response.status == 500), an exception with an error text is thrown.

You can configure what to return back. To handle a response to the failed request, use the **catch** method of the promise that is returned. 

~~~js

restDataProvider.send(url, method, data)
.then(data => {
   ... // success: do something with data
})
.catch(err => {
    ... // error handler
});

~~~

### Examples

The next example shows how to add headers by extending RestDataProvider, which can give you more control of the data you send to the server: 

~~~jsx title="Example 1"{3-8}
const url = "https://some_backend_url";

class MyDataProvider extends RestDataProvider {
    send(url, method, data, headers) {
        headers = { ...headers, "SomeToken": "abc" };
        return super.send(url, methods, data, headers);
    }
}

calendar.api.setNext(new MyDataProvider(url));
~~~

The example below shows how to add additional parameters to the **/events** requests. Note, that parameters are added to the calendar data object for the **update-event**/**add-event** handler. 
You don't need to call the **send()** method manually here as it's called via the **api.setNext()** method. The same approach can be applied to the **update-calendar** and **add-calendar** events.

~~~jsx title="Example 2"{12-16}
const url = "https://some_backend_url";
const restProvider = new eventCalendar.RestDataProvider(url);

Promise.all([
    restProvider.getEvents(),
    restProvider.getCalendars()
]).then(([events, calendars]) => {
    const calendar = new eventCalendar("#root", {
       // configuration parameters
    });

    calendar.api.on("update-event", data => {
        data.custom = "custom event";
    });
    calendar.api.setNext(restProvider);
});
~~~

If you send an arbitrary request that is not managed by the EventCalendar API, you can pass the parameters object into the **send()** method of the RestDataProvider manually:

~~~jsx title="Example 3"{5}
const customEndpoint = `projects/1`;
const params = {
    lastModified: Date.now()
};
restProvider.send(customEndpoint , "PUT",  params).then(data => {}),
~~~
---

**Related articles**: 
- [Working with server](/guides/working_with_server)
- [api.setNext()](api/internal/js_eventcalendar_setnext_method.md)