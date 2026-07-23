---
sidebar_label: date
title: date Config
description: You can learn about the date config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# date

### Description

@short: Optional. A selected date of Event Calendar

### Usage

~~~jsx {}
date?: Date;
~~~

:::info
To set the current date of Event Calendar dynamically, you can use the 
[`setDate()`](api/methods/js_eventcalendar_setdate_method.md) and
[`setConfig()`](api/methods/js_eventcalendar_setconfig_method.md) methods
:::

### Example

~~~jsx {4}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    events,
    date: new Date("2022-04-22T00:00:00"),
    // other configuration parameters
});
~~~

**Related sample:** [Event Calendar. Initialization](https://snippet.dhtmlx.com/btytgzed?tag=event_calendar)