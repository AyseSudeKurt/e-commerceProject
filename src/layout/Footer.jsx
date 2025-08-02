import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} E-ticaret Projesi. Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
    );
}

export default Footer; // Bu satır çok önemli!