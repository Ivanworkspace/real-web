#!/bin/bash

# 🚀 Future Craft - Quick Start Script

echo "════════════════════════════════════════════════════════"
echo "🚀 Future Craft - Sito Rinnovato"
echo "════════════════════════════════════════════════════════"
echo ""

# Naviga nella directory
cd "$(dirname "$0")"

# Verifica Node.js
echo "📦 Verifico Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js non trovato. Installalo da https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js installato: $NODE_VERSION"
echo ""

# Verifica npm
echo "📦 Verifico npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm non trovato."
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm installato: $NPM_VERSION"
echo ""

# Controlla se node_modules esiste
if [ ! -d "node_modules" ]; then
    echo "📥 Installazione dipendenze..."
    npm install
    echo "✅ Dipendenze installate!"
    echo ""
else
    echo "✅ Dipendenze già installate"
    echo ""
fi

# Termina processi sulla porta 3000
echo "🔍 Verifico porta 3000..."
PID=$(lsof -ti:3000 2>/dev/null)
if [ ! -z "$PID" ]; then
    echo "⚠️  Processo trovato sulla porta 3000 (PID: $PID)"
    echo "🔪 Termino il processo..."
    kill -9 $PID 2>/dev/null
    sleep 2
    echo "✅ Porta 3000 liberata"
    echo ""
fi

echo "════════════════════════════════════════════════════════"
echo "🎨 CARATTERISTICHE DEL NUOVO SITO:"
echo "════════════════════════════════════════════════════════"
echo "✨ Animazioni 3D con Three.js"
echo "🎯 Focus su clienti e risultati"
echo "📱 Social media in evidenza"
echo "💼 Design ultra-professionale"
echo "📊 Statistiche: 50+ clienti, +250% crescita"
echo "🎨 Glassmorphism e gradient effects"
echo ""

echo "════════════════════════════════════════════════════════"
echo "🚀 AVVIO SERVER..."
echo "════════════════════════════════════════════════════════"
echo "📍 URL: http://localhost:3000"
echo "⏰ Attendi che il server si avvii..."
echo ""
echo "💡 Per testare il sito, consulta TESTING_GUIDE.md"
echo "📚 Per documentazione completa, vedi README.md"
echo ""
echo "════════════════════════════════════════════════════════"
echo ""

# Avvia il server
npm start
