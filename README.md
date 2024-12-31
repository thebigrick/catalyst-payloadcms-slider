# Slider Plugin for PayloadCMS and Catalyst (@thebigrick/catalyst-payloadcms-slider)

A plugin that adds slider/carousel functionality to PayloadCMS within the BigCommerce Catalyst framework. This plugin extends @thebigrick/catalyst-payloadcms to provide easy-to-manage slider content through the PayloadCMS admin panel.

> **BETA Notice**: This package is currently in beta. While stable and functional, it may undergo changes before the
> final release.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
    - [Basic Setup](#basic-setup)
    - [Creating a Slider](#creating-a-slider)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Prerequisites

Before installing this plugin, make sure you have:
- A working [Catalyst](https://www.catalyst.dev/) project
- [Pluginizr](https://github.com/thebigrick/catalyst-pluginizr) installed in your Catalyst project
- [@thebigrick/catalyst-payloadcms](https://github.com/thebigrick/catalyst-payloadcms) installed and configured

## Installation

Clone this repository as a submodule into your Catalyst project's `plugins` directory:

```bash
cd /path-to-catalyst
git submodule add https://github.com/thebigrick/catalyst-payloadcms-slider.git plugins/catalyst-payloadcms-slider
```

## Usage

### Basic Setup

The slider plugin will automatically register its configuration with PayloadCMS. No additional configuration is required if you're using the default settings.

### Creating a Slider

1. Access your PayloadCMS admin panel at `http://localhost:3000/payload/admin`
2. Navigate to "Globals / Home Slider"
3. Fill in the required fields

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions:

1. Check existing issues in the repository
2. Create a new issue if your problem hasn't been reported
3. Provide detailed information about your setup and the problem you're experiencing
