<h2 id="research-works" class="section-heading">Research Works</h2>

<div class="publications">
  <div class="publication-heading">
    <h3>Selected Publications</h3>
    <span>{{ site.data.publications.main | size }} papers</span>
  </div>

  <ol class="bibliography">
    {% for link in site.data.publications.main %}
    <li class="publication-card">
      <div class="publication-number" aria-hidden="true">{{ forloop.index | prepend: "0" | slice: -2, 2 }}</div>
      <div class="publication-body">
        <h4 class="title">
          {% if link.pdf %}<a href="{{ link.pdf }}" target="_blank" rel="noopener">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}
        </h4>
        <div class="author">{{ link.authors }}</div>
        <div class="periodical"><em>{{ link.conference }}</em></div>
        <div class="links">
          {% if link.pdf %}<a href="{{ link.pdf }}" target="_blank" rel="noopener">Paper</a>{% endif %}
          {% if link.code %}<a href="{{ link.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
          {% if link.page %}<a href="{{ link.page }}" target="_blank" rel="noopener">Project</a>{% endif %}
          {% if link.slides %}<a href="{{ link.slides }}" target="_blank" rel="noopener">Slides</a>{% endif %}
          {% if link.bibtex %}<a href="{{ link.bibtex }}" target="_blank" rel="noopener">BibTeX</a>{% endif %}
          {% if link.ccfa %}<span class="rank rank-a">CCF-A</span>{% endif %}
          {% if link.ccfb %}<span class="rank rank-b">CCF-B</span>{% endif %}
          {% if link.ccfc %}<span class="rank rank-c">CCF-C</span>{% endif %}
          {% if link.ccfd %}<span class="rank rank-other">CCF-None</span>{% endif %}
          {% if link.notes %}<span class="note">{{ link.notes }}</span>{% endif %}
        </div>
      </div>
    </li>
    {% endfor %}
  </ol>
</div>
