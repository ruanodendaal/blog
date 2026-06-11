# frozen_string_literal: true

# Derives the `image` value that jekyll-seo-tag consumes from this site's
# existing `image-name` convention (a path relative to the CloudFront CDN).
#
# This keeps authoring simple — posts only set `image-name:` / `image-alt:` —
# while giving jekyll-seo-tag a fully-qualified absolute URL so Open Graph,
# Twitter/X (summary_large_image) and JSON-LD image metadata are all correct.
#
# Runs in the custom GitHub Actions build (`bundle exec jekyll build`), which
# loads `_plugins/` — unlike the sandboxed github-pages gem.
module SeoImage
  class Generator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      cdn = site.config["cdn"].to_s
      documents = site.posts.docs + site.pages
      documents.each do |doc|
        name = doc.data["image-name"]
        next if name.nil? || name.empty?
        next if doc.data["image"] # respect an explicit override

        doc.data["image"] = {
          "path" => "#{cdn}#{name}",
          "alt"  => doc.data["image-alt"],
        }
      end
    end
  end
end
