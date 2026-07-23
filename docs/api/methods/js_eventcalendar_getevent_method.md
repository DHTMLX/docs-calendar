---
sidebar_label: getEvent()
title: getEvent Method
description: You can learn about the getEvent method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# getEvent()

### Description

@short: Gets an object of the event data by its ID

### Usage

~~~jsx {}
getEvent({ id: string | number }): object;
~~~

### Returns

:::info
The `getEvent()` method returns an object of the event data by the specified ID. For details, see the [`events`](../../config/js_eventcalendar_events_config) property!
:::

### Parameters

- `id` - (required) an **ID** of the event 

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// get an event data with the "1" ID
const event_data = calendar.getEvent({ id: "1" });
console.log(event_data);
~~~
