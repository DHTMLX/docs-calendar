---
sidebar_label: set-mode
title: set-mode Event
description: You can learn about the set-mode event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# set-mode

### Description

@short: Fires when setting a view mode

### Usage

~~~jsx {}
"set-mode": ({ value: string }) => void;
~~~

### Parameters

The callback of the **set-mode** event can take an object with the following parameter:

- `value` - (required) a view mode to be applied

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "set-mode" event
calendar.api.on("set-mode", (obj) => {
    console.log(obj);
});
~~~
