CREATE TABLE IF NOT EXISTS visitors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip_hash TEXT NOT NULL,
    country TEXT,
    city TEXT,
    asn TEXT,
    os TEXT,
    browser TEXT,
    screen_resolution TEXT,
    referrer TEXT,
    utm_campaign TEXT,
    session_duration_seconds INTEGER,
    session_events_json TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
