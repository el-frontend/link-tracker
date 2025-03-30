# Link Tracker

Link Tracker is a NextJS 15 application designed to create and manage short links, tracking their usage and providing analytics.

## Features

- **Create Short Links**: Generate concise URLs that redirect to your target destinations
- **Visit Counter**: Track the number of visits for each of your links
- **Analytics Dashboard**: Visualize link performance and visitor statistics
- **Free to Use**: Available for anyone who wants to manage and track their links

## Technology Stack

- **Frontend**: Next.js 15
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: shadcn/ui

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/link-tracker.git
cd link-tracker
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create a .env file with the following variables
DATABASE_URL=your_postgres_connection_string
# Add any other required environment variables
```

4. Run database migrations
```bash
npm run db:migrate
```

5. Start the development server
```bash
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.