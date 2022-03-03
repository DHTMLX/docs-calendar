---
sidebar_label: Localization
title: Localization
description: You can learn about the localization in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# Localization

You can localize labels in the interface of JavaScript Scheduler and present it in any necessary language. You just need to provide localized strings for labels and apply your locale to the component.

## Default locale

The English locale is used by default:

~~~jsx {}
const en = {
	lang: "en",
	sheduler: {
		...
	}
};
~~~

:::info
Besides the ***en*** locale, Scheduler also includes the built-in ***ru*** and ***cn*** locales
:::

<details>
<summary><b>ru</b> locale</summary>

~~~jsx
const ru = {
	lang: "ru",
	sheduler: {
		...
	}
};
~~~
</details>

<details>
<summary><b>cn</b> locale</summary>

~~~jsx {}
const cn = {
	lang: "cn",
	scheduler: {
		...
	}
};

~~~
</details>

## Custom locale

To apply a custom locale you need to:

- create the custom locale (or modify the existed one) and provide translations for all text labels in Scheduler (it can be any language you need)
- apply the new locale via the [**locale**](api/config/scheduler_locale_config.md) property or by calling the [**setLocale()**](api/methods/scheduler_setlocale_method.md) method, that takes an object with translations (custom locale) as a parameter

## Example

In this snippet you can see how to switch through the *EN*, *RU* and *CN* locales:

**[TODO]!!! Заменить ссылку на сниппет с локализацией**
<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
