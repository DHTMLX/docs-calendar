---
sidebar_label: getCalendar()
title: getCalendar Method
description: You can learn about the getCalendar method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# getCalendar()

### Description

@short: Gets an object of the calendar data by its ID

### Usage

~~~jsx {}
getCalendar({ id: string | number }): object;
~~~

### Returns

:::info
The `getCalendar()` method returns an object of the calendar data by the specified ID. For details, see the [`calendars`](../../config/js_eventcalendar_calendars_config) property!
:::

### Parameters

- `id` - (required) an **ID** of the calendar

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// get a calendar data with the "work" ID
const calendar_data = calendar.getCalendar({ id: "work" });
console.log(calendar_data);
~~~
