# Technologies Section Fix

## Current Issue
The Technologies section in ServicePage.jsx doesn't match the main page design at all.

## What Needs to be Replaced

Replace the entire Technologies section (lines 130-189) with this exact code from the main page:

```jsx
          <div className="max-w-4xl mx-auto space-y-4">
            {service.technologies && service.technologies.map((tech) => (
              <div
                key={tech.id}
                className={`card overflow-hidden transition-all duration-300 ${
                  activeTechId === tech.id ? 'scale-105' : 'scale-100'
                }`}
                style={{ zIndex: activeTechId === tech.id ? 10 : 1 }}
              >
                <button
                  className="w-full py-3 px-6 flex items-center justify-between"
                  onClick={() => setActiveTechId(activeTechId === tech.id ? null : tech.id)}
                >
                  <h3 className="text-lg font-semibold text-neutral-100 text-left">{tech.title}</h3>
                  <FaChevronDown
                    className={`text-primary-500 transition-transform duration-300 ${
                      activeTechId === tech.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeTechId === tech.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 pt-0">
                    <p className="text-sm text-neutral-300 leading-relaxed mb-6">{tech.description}</p>
                    <div className="flex flex-wrap gap-6">
                      {tech.stack && tech.stack.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-2 bg-dark-700 p-3 rounded-lg"
                        >
                          <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                            <span className="text-primary-400 font-bold text-sm">{item.name.charAt(0)}</span>
                          </div>
                          <span className="text-xs text-neutral-300">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
```

## Key Differences from Current Design:
1. **Simple Button**: Just title + chevron (no icons, badges, or complex layout)
2. **Simple Content**: Description + technology cards in flex-wrap
3. **Small Icons**: 10x10 rounded circles (not 14x14 rounded-xl)
4. **Simple Cards**: Basic dark-700 background (not complex hover effects)
5. **Clean Layout**: No borders, gradients, or complex styling

This matches the main page Technologies section exactly.





















