---
sidebar_label: set-date
title: set-date Event
description: You can learn about the set-date event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# set-date

### Description

@short: Fires when setting a new date

### Usage

~~~jsx {}
"set-date": ({ value: Date }) => void;
~~~

### Parameters

The callback of the **set-date** event can take an object with the following parameters:

- `value` - (required) a current date to be set

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "set-date" event
calendar.api.on("set-date", (obj) => {
    console.log(obj);
});
~~~
