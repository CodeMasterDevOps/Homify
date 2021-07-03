from cs50 import SQL

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///home.db")

sqlTables = ['properties', 'bhk_types', 'bhk_details', 'facade_images','interiors', 'nearby', 'features', 'property_audios']
# Other tables: partners

for i in sqlTables:
    db.execute('BEGIN TRANSACTION')
    delete = db.execute(f"DELETE FROM {i}")
    db.execute('COMMIT')



