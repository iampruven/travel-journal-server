module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgresql://postgres@localhost/travel_journal_test",
  TEST_DATABASE_URL: process.env.DB_URL || 'postgresql://postgres@localhost/travel_journal_test',
  JWT_SECRET: process.env.JWT_SECRET || "encryption-words-and-stuff",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "3h",
};
